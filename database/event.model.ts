import mongoose, { Schema, Document, Model } from 'mongoose';

// TypeScript interface for Event document
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Helper to generate a URL-friendly slug from a string
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    mode: { type: String, required: true, trim: true },
    audience: { type: String, required: true, trim: true },
    agenda: { type: [String], required: true },
    organizer: { type: String, required: true, trim: true },
    tags: { type: [String], required: true },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Pre-save hook for slug generation, date normalization, and validation
EventSchema.pre<IEvent>('save', function (next) {
  // Only regenerate slug if title changed
  if (this.isModified('title')) {
    this.slug = slugify(this.title);
  }

  // Normalize date to ISO format
  if (this.isModified('date')) {
    const parsedDate = new Date(this.date);
    if (isNaN(parsedDate.getTime())) {
      return next(new Error('Invalid date format.'));
    }
    this.date = parsedDate.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  // Normalize time to HH:MM (24h)
  if (this.isModified('time')) {
    const timeMatch = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(this.time);
    if (!timeMatch) {
      return next(new Error('Time must be in HH:MM 24-hour format.'));
    }
    this.time = `${timeMatch[1]}:${timeMatch[2]}`;
  }

  // Validate required fields are present and non-empty
  const requiredFields: (keyof IEvent)[] = [
    'title', 'description', 'overview', 'image', 'venue', 'location',
    'date', 'time', 'mode', 'audience', 'agenda', 'organizer', 'tags'
  ];
  for (const field of requiredFields) {
    const value = this[field];
    if (
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '') ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return next(new Error(`Field '${field}' is required and cannot be empty.`));
    }
  }

  next();
});

// Unique index for slug
EventSchema.index({ slug: 1 }, { unique: true });

// Export Event model
export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

// Key logic:
// - Slug is auto-generated and unique
// - Date is normalized to YYYY-MM-DD
// - Time is validated to HH:MM 24h
// - Required fields are checked for non-empty values
// - Automatic timestamps enabled

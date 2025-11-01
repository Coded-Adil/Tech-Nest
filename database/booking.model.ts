import mongoose, { Schema, Document, Model, Types } from 'mongoose';
import { Event } from './event.model';

// TypeScript interface for Booking document
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
    email: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Pre-save hook for event existence and email validation
BookingSchema.pre<IBooking>('save', async function (next) {
  // Validate eventId references an existing Event
  const eventExists = await Event.exists({ _id: this.eventId });
  if (!eventExists) {
    return next(new Error('Referenced eventId does not exist.'));
  }

  // Validate email format
  const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(this.email)) {
    return next(new Error('Invalid email format.'));
  }

  next();
});

// Index for eventId for faster queries
BookingSchema.index({ eventId: 1 });

// Export Booking model
export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

// Key logic:
// - eventId is validated to reference an existing Event
// - email is validated for format
// - eventId is indexed for query performance
// - Automatic timestamps enabled

import { Expose } from 'class-transformer';
import { Attendee } from 'src/events/attendee/attendee.entity';
import { PaginationResult } from 'src/pagination/paginator';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;
  @Column()
  @Expose()
  name: string;
  @Column()
  @Expose()
  description: string;
  @Column()
  @Expose()
  when: Date;
  @Column()
  @Expose()
  address: string;
  @OneToMany(() => Attendee, (attendee) => attendee.event)
  @Expose()
  attendees: Attendee[];

  @ManyToOne(() => User, (user) => user.organized)
  @JoinColumn({ name: 'organizerId' })
  @Expose()
  organizer: User;

  @Column({ nullable: true })
  organizerId: string;

  @Expose()
  attendeeCount?: number;
  @Expose()
  attendeeRejected?: number;
  @Expose()
  attendeeMaybe?: number;
  @Expose()
  attendeeAccepted?: number;
}

export type PaginatedEvents = PaginationResult<Event>;

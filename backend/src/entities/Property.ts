import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum ConsumptionType {
  PURCHASE = "PURCHASE",
  RENT = "RENT",
}

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  lat: number;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  long: number;

  @Column("int", { nullable: true })
  sizeM2: number;

  @Column("int", { nullable: true })
  stars: number;

  @Column({
    type: "enum",
    enum: ConsumptionType,
  })
  consumptionType: ConsumptionType;

  @Column("decimal", { precision: 12, scale: 2 })
  price: number;

  @Column({ nullable: true })
  photo: string;

  @Column("text", { nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

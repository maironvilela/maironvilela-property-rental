/**
   * @summary Classe que representa o modelo de dados do endereço do imóvel
 */


import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id?: string;


  @Column({ name: 'zip_code' })
  zipCode: string;


  @Column({ name: 'street_address' })
  streetAddress: string;


  @Column()
  number: number;


  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;


  @Column()
  state: string;


  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

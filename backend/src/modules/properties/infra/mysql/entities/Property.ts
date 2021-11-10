/**
   * @summary Classe que representa o modelo de dados de um imóvel no banco de dados
   * @version: 1.0
*/


import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from './Address';
import { PropertyImages } from './PropertyImages';
import { Specifications } from './Specifications';


@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  description: string;

  @Column({ name: 'property_type' })
  propertyType: string;


  @Column()
  price: number;


  @OneToMany(() => PropertyImages, propertyImages => propertyImages.property, { cascade: true })
  @JoinColumn({ name: 'address_id' })
  propertyImages: PropertyImages[];

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToMany(() => Specifications, specifications => specifications.property, { cascade: true })
  @JoinColumn({ name: 'address_id' })
  specifications: Specifications[];


  @Column({ name: 'is_location' })
  isLocation: boolean;

  @Column({ name: 'is_sale' })
  isSale: boolean;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

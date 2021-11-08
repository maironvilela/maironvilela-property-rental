/**
   * @summary Classe que representa o modelo de dados das fotos dos imóveis
**/

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Property } from './Property';


@Entity('property_images')
export class PropertyImages {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToOne(() => Property, property => property.propertyType)
  @JoinColumn({ name: 'property_id' })
  property?: Property;


  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

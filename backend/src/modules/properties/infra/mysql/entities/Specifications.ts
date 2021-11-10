/**
   * @summary Classe que representa o modelo de dados de um das especificações dos imóveis no banco de dados
   * @version: 1.0
*/


import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Property } from './Property';


@Entity('specifications')
export class Specifications {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Property, property => property.propertyType)
  @JoinColumn({ name: 'property_id' })
  property?: Property;


  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

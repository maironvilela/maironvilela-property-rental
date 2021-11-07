/**
   * @summary Classe que representa o modelo de dados de um imóvel no banco de dados
   * @version: 1.0
*/


import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Specification } from './Specification';


@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => Specification, { cascade: true })
  @JoinTable({
    name: 'specifications_properties',
    joinColumns: [{ name: 'property_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }]
  })
  specifications: Specification[];

  @Column({ name: 'is_location' })
  isLocation: boolean;

  @Column({ name: 'is_sale' })
  isSale: boolean;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

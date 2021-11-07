/**
   * @summary Classe que representa o modelo de dados de um imóvel no banco de dados
   * @version: 1.0
*/


import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ name: 'is_location' })
  isLocation: boolean;

  @Column({ name: 'is_sale' })
  isSale: boolean;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

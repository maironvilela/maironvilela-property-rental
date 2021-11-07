/**
   * @summary Classe que representa o modelo de dados de um das especificações dos imóveis no banco de dados
   * @version: 1.0
*/


import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('specifications')
export class Specification {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;


  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

}

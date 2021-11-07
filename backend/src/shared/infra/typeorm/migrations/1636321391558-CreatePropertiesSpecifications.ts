import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePropertiesSpecifications1636321391558 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specifications_properties',
        columns: [

          {
            name: 'property_id',
            type: 'int',
            isNullable: false,

          },
          {
            name: 'specification_id',
            type: 'int',
            isNullable: false,

          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'specifications_properties',
      new TableForeignKey({
        name: 'FKSpecificationsPProperties',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'],
        columnNames: ['specification_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'specifications_properties',
      new TableForeignKey({
        name: 'FKPropertiesSpecifications',
        referencedTableName: 'properties',
        referencedColumnNames: ['id'],
        columnNames: ['property_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropForeignKey(
      'properties_specifications',
      'FK_Specification_Properties'
    );

    await queryRunner.dropForeignKey(
      'properties_specifications',
      'FK_Properties_Specification'
    );
  }

}

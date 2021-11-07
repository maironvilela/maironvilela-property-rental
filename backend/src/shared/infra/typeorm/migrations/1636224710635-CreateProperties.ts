import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProperties1636224710635 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'properties',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'price',
            type: 'double',
            isNullable: false,
          },
          {
            name: 'is_sale',
            type: 'tinyint(1)',
            isNullable: false,
          },
          {
            name: 'is_location',
            type: 'tinyint(1)',
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
      }),
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('properties');

  }

}

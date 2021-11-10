import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSpecification1636316903829 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specifications',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'description',
            type: 'varchar(500)',
            isNullable: false,
          },

          {
            name: 'property_id',
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
      }),
    );

    await queryRunner.createForeignKey(
      'specifications',
      new TableForeignKey({
        name: 'FK_Property_Specifications',
        columnNames: ['property_id'],
        referencedTableName: 'properties',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropForeignKey(
      'specifications',
      'FK_Property_Specifications'
    );

    await queryRunner.dropTable('specifications');

  }

}

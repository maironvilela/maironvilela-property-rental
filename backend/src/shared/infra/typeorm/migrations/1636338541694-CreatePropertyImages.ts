import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePropertyImages1636338541694 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'property_images',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'image_url',
            type: 'varchar(200)',
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
      'property_images',
      new TableForeignKey({
        name: 'FK_Property_Imagens_Property',
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
      'property_images',
      'FK_Property_Imagens_Property'
    );
    await queryRunner.dropTable('property_images');

  }

}

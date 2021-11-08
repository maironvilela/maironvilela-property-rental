import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreatePropertiesAddress1636332194459 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'properties',
      new TableColumn({
        name: 'address_id',
        type: 'int',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'properties',
      new TableForeignKey({
        name: 'FK_Property_Address',
        columnNames: ['address_id'],
        referencedTableName: 'address',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }


  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropForeignKey('properties', 'FK_Property_Address');

    /* Remover coluna provider_id */
    await queryRunner.dropColumn('properties', 'address_id');

  }

}

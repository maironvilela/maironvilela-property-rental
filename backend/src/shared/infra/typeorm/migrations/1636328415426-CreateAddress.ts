import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1636328415426 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(


      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'zip_code',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'street_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'state',
            type: 'varchar',
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
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');

  }

}

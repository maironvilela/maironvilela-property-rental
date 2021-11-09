import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsMainImagePropertyInPropertyImagesTable1636471088727 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.addColumn(
      'property_images',
      new TableColumn({
        name: 'is_main_image',
        type: 'tinyint(1)',
        isNullable: false,
        default: '0',


      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('property_images', 'is_main_image');
  }

}



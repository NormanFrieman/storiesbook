import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("name").notNullable()
      table.string("email").unique().notNullable()
      table.string("password").notNullable()
      table.integer("posts")
      table.specificType("followers", "JSON[]")
      table.specificType("following", "JSON[]")
      table.specificType("stories", "JSON[]")
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({ name: "users",
    expression: 
    `
    select 
    "user"."user_id",
    "user"."surname",
    "user"."name",
    "user"."lastname",
    "user"."phone",
    "user"."email",
    "role"."role",
    "user"."token"
    from
    "users"
    inner join "role" on "user"."role_id" = "role"."role_id" 
    `
})
export class UserEntityView{
    @ViewColumn()
    user_id: number

    @ViewColumn()
    surname: string

    @ViewColumn()
    name: string

    @ViewColumn()
    lastname: string

    @ViewColumn()
    phone: string

    @ViewColumn()
    email: string

    @ViewColumn()
    role: string

    @ViewColumn()
    token: string
}
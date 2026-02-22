import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `

    type User {
        name:String!
        username:String!
        id:ID
        employeeId:Int
        working:Boolean
    }

    type Todo {
        id:ID
        title:String!
        author:String!
        username:String
        published:Boolean
        employee:User
    }

    type Query {
        Todos: [Todo]
        Soham: [Todo]
        Employee:[User]
        GetEmployee(id:ID!):User
        Todo(id:ID!): Todo
    }
`
const Employee = [
    {
        name: "Soham",
        username: "Soham",
        id: 1,
        employeeId: 100,
        working: true
    },
    {
        name: "Ayush",
        username: "Ayush",
        id: 2,
        employeeId: 200,
        working: true
    },
    {
        name: "Aryan",
        username: "Aryan",
        id: 3,
        employeeId: 300,
        working: true
    },
    {
        name: "Omkar",
        username: "Omkar",
        id: 4,
        employeeId: 400,
        working: true
    },
    {
        name: "Pappu",
        username: "Pappu",
        id: 5,
        employeeId: 500,
        working: true
    },
    {
        name: "Mandem",
        username: "Mandem",
        id: 6,
        employeeId: 600,
        working: true
    },
]

const Todos = [
    {
        id: 1,
        title: "My-Title",
        author: "My-Author",
        username: "Soham",
        published: false,
        employee: Employee[0]
    },
    {
        id: 2,
        title: "Your-Title",
        author: "Your-Author",
        username: "Soham",
        published: true,
        employee: Employee[1]
    },
    {
        id: 3,
        title: "Her-Title",
        author: "Her-Author",
        username: "Soham",
        published: false,
        employee: Employee[2]
    },
    {
        id: 4,
        title: "His-Title",
        author: "His-Author",
        username: "Soham",
        published: true,
        employee: Employee[3]
    },
    {
        id: 5,
        title: "She-Title",
        author: "She-Author",
        username: "Soham",
        published: false,
        employee: Employee[4]
    },
    {
        id: 6,
        title: "Mandem-Title",
        author: "Mandem-Author",
        username: "Soham",
        published: true,
        employee: Employee[0]
    },

]

const resolvers = {
    Query: {
        Todos: () => Todos,
        Soham: () => [Todos[2]],
        Employee: () => Employee,
        GetEmployee: (parent, { id }) => {
            const employee = Employee.find((empId) => empId.id === parseInt(id))
            return employee
        },
        Todo: (parent, { id }) => {
            const result = Todos.find((todoId) => todoId.id === parseInt(id))
            return result
        },
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { uri } = await startStandaloneServer(server, { listen: { port: 4000 } })
console.log(`Server is running on http://localhost:4000`)
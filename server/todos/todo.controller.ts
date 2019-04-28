import { Controller, Get } from "@nestjs/common";
import { ITodo } from "./todo.interface";

@Controller('todos')
export class TodoController {

  @Get()
  public index(): ITodo[] {
    return [
      {
        id: 1,
        description: 'Create an Angular project',
        checked: true,
      },
      {
        id: 2,
        description: 'Add @nestjs/ng-universal module to the project',
        checked: false,
      },
      {
        id: 3,
        description: 'Run the project and enjoy',
        checked: false,
      },
    ];
  }
}

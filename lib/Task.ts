class Task {
  id: number;
  title: string;
  desc: string;
  date: string;
  isDone: boolean;

  constructor(title: string, desc: string, date: string, isDone: boolean) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.isDone = isDone;
  }

  asignId(id: number) {
    this.id = id;
  }
}

export default Task;

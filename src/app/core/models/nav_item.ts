export class NavItem {
  constructor(
    public label: string,
    public hint: string,
    public icon: string,
    public link: string,
    public isAuthenticated: boolean
  ){}
}

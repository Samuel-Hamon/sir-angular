export class Pokemon {
  id: number;
  name: string;
  types: string[] = [];
  height: number = 0;
  weight: number = 0;
  stats: any[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Méthode pour initialiser les détails du Pokémon
  setDetails(details: any) {
    this.types = details.types.map((type: any) => type.type.name);
    this.height = details.height;
    this.weight = details.weight;
    this.stats = details.stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat
    }));
  }
}

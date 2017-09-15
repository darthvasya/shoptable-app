import { Item } from './Item';

export class Shop {
    public Id: number;
    public Name: string;
    public Address: string;
    public StartWorkTime: string;
    public EndWorkTime: string;
    public Items: Item[];
}
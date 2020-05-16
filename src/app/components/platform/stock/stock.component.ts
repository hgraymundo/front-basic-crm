import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StockService } from '../../../services/stock.service';
import { StoreService } from '../../../services/store.service';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor( 
    private stockService: StockService, 
    private formBuilder: FormBuilder, 
    private storeService: StoreService, 
    private inventoryService: InventoryService
    ) { }
    object_title = "Stock";
    btn_new= "Nuevo Movimiento";
    term: any;
    Stock: any[];
    p: number = 1;
    id: any;
    Stores: any[];
    idStore: any;
    idInventory: any;
    Inventories: any[];
  
    ngOnInit() {
      this.loadStores()
    }

    loadStores(){
      this.storeService.getstore().subscribe( result => { console.log(result)
        this.Stores = result;
      })
    }

    loadInventories(event: any) { console.log(event.target.value);
      this.inventoryService.getInventoryByStoreId(event.target.value).subscribe( result => {
        this.Inventories = result;
        console.log(result);
      })

    }

    loadStock(event_: any) { console.log(event_.target.value);
      this.stockService.getStock(event_.target.value).subscribe(result => { 
        this.Stock = result;
        console.log(result);
      })
    }

}

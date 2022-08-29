import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import { Wishlist } from '../wishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  products: Product[]=[]
  searchText:any
  list: Wishlist[]=[]
  


  constructor(private pservice:ProductService,private uservice:UserService,private router:ActivatedRoute,private wservice:WishlistService,private rout:Router) { }
u_id:any
p_id:any

  ngOnInit(): void {

    this.u_id=this.router.snapshot.paramMap.get('id')
    alert("welcome user "+this.u_id)

    //to show products in user page
    this.pservice.getAllProducts().subscribe(res=>{
      this.products=res

    })



  }


  getData(id:number){
    
    this.wservice.addToWishList(this.u_id,id).subscribe(res=>{
      alert(res)

    })
    
  }
  getWishlist(){
    this.rout.navigate(['wishlist',this.u_id])

  }

  userLogout(){
    localStorage.setItem('token','')
  }
  



}

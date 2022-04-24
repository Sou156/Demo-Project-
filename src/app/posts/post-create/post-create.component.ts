

import { Component,EventEmitter,Output,OnInit} from '@angular/core';

import {FormControl,} from '@angular/forms'

import {Post} from '../post.model'

import {NgForm,FormGroup,Validators} from "@angular/forms"

import { PostsService } from '../posts.service';
import { ParamMap } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import {mimeType} from "./mime-type.validator"
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['post-create.component.css']

})
export  class PostCreateComponent implements OnInit {
  enteredContent=""
  enteredTitle=""
private mode = 'create'
private postId: string;
 post:Post;
isLoading= false
form: FormGroup
imagePreview:string
constructor(public postsService:PostsService,public  route:ActivatedRoute){}


ngOnInit(){
  this.form= new FormGroup({
    'title': new FormControl(null,{validators: [Validators.required,Validators.minLength(3)]
    }),
  'content' : new FormControl(null,{validators: [Validators.required]
  }),
  image:new FormControl(null,{validators: [Validators.required],asyncValidators:[mimeType]
  })
});
  this.route.paramMap.subscribe((paramMap:ParamMap)=>{
if(paramMap.has("postId")){
this.mode= "edit"
this.postId= paramMap.get("postId")
this.isLoading=true

this.postsService.getPost(this.postId).subscribe(postData=>{
this.isLoading=false;
  this.post= {id: postData._id, title: postData.title, content: postData.content, imagePath:postData.imagePath};
  this.form.setValue({title:this.post.title, content:this.post.content, image:this.post.imagePath});
})
}else{
  this.mode="create"
  this.postId=null;
}
  })
}


onImagePicked(event:Event){
  const file=(event.target as HTMLInputElement).files[0]
  this.form.patchValue({image:file});
  this.form.get('image').updateValueAndValidity();
  const reader= new FileReader();
  reader.onload=()=>{
    this.imagePreview=reader.result as string;
  };
  reader.readAsDataURL(file)
 
}
  onSavePost(){
    if(this.form.invalid){
      return
    }
    this.isLoading=true;
    if(this.mode=='create'){
      this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image)
    }else{
      this.postsService.updatePost(this.postId,this.form.value.title, this.form.value.content,this.form.value.image)
    }
 
  this.form.reset()
  }
  

  toppingsControl = new FormControl([]);
  toppingList: string[] = ['General Consultaion', 'Speech Therapy', 'Special Education', 'Occupational therapy', 'Screening', 'Assessment', 'Family Training', 'Psychologist'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  
  
  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  selectedCountry: string = "GB";
  
  selectedCountryControl = new FormControl(this.selectedCountry);




}
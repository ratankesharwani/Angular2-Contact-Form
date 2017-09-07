import { Component } from '@angular/core';
import {PostsServices} from '../services/posts.services';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
    selector: 'user-component',
    styleUrls: ['./../../assets/styles/user-style.css'],
    templateUrl: './user.component.html',
    providers: [PostsServices, {provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class UserComponent {

    title: string;
    name: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];
    totalItems: number;
    currentPage: number;
    smallnumPages: number;

    constructor(private postServices: PostsServices) {
        this.title = 'User Info';
        this.name = 'Swathi !!';
        this.address = {
            street: '4747 willow rd',
            city: 'Plesanton'
        };
        this.hobbies = ['music', 'movies', 'sports'];
        this.showHobbies = false;
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;

        this.postServices.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies() {
        if (this.showHobbies === true) {
            this.showHobbies = false;
        }else {
            this.showHobbies = true;
        }
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    deleteHobby(index){
        this.hobbies.splice(index, 1);
    }

    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
}

interface address {
    street: string;
    city: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

import { Component } from "@angular/core";

// Memberikan anotasi component
@Component({
    selector : 'contact',
    templateUrl : './contact.component.html'
})
export class ContactComponent {
    // Membuat Sebuah Variable
    // dan didalamnya sebuah object
    contact:any = {
        id: 1,
        name: 'Rizki',
        phone: '085211345481',
        email: 'Rizukiwahyudi@gmail.com'
    }

    // Membuat Sebuah variable berbentuk array
    contacts:any[] =[
        {
            id: 1,
            name: 'Rizki',
            phone: '085211345481',
            email: 'Rizki@gmail.com'
        },
        {
            id: 2,
            name: 'Rizki Wahyudi',
            phone: '085211345482',
            email: 'Rizkiwahyudi@gmail.com'
        },
        {
            id: 3,
            name: 'Rizukious',
            phone: '085211345483',
            email: 'Rizukious@gmail.com'
        }
    ]
}
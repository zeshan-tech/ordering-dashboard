import { Component } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss',
})
export class ProductsTableComponent {
  displayedColumns: string[] = ['Product', 'Price', 'Status'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA = [
  {
    price: 1,
    name: 'Nike shoe 1',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 2,
    name: 'Nike shoe 2',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 3,
    name: 'Nike shoe 3',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 4,
    name: 'Nike shoe 4',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 5,
    name: 'Nike shoe 5',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 6,
    name: 'Nike shoe 6',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 7,
    name: 'Nike shoe 7',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 8,
    name: 'Nike shoe 8',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
  {
    price: 9,
    name: 'Nike shoe 9',
    description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    status: 'enable',
    imageUrl:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f23e9b8-01a7-48a2-af35-705489e8f2de/jordan-1-mid-alt-younger-shoes-7DtswX.png',
  },
];

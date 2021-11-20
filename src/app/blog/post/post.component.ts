import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public postContent?: string;
  constructor() {
    this.postContent = `<h1 style="text-align:center">Lorem Ipsum</h1>

    <p>&nbsp;</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, ipsum ac tristique lacinia, orci leo iaculis tortor, a cursus felis ligula et felis. Vivamus malesuada dignissim dui vel fringilla. Quisque rutrum ipsum elit, a dictum ligula elementum at. Maecenas odio neque, pulvinar ac bibendum sit amet, sagittis et turpis. Integer aliquam placerat facilisis. Aenean lacinia metus nec urna viverra, non placerat urna ultricies. Cras nibh dolor, imperdiet a lorem ut, iaculis ultrices lacus. Ut vel neque quis erat elementum luctus non elementum orci. Phasellus vulputate orci quis mollis porta. Nullam in metus tempor, mattis mi et, pulvinar metus.</p>
    
    <p>&nbsp;</p>
    
    <p>Vestibulum lectus diam, pretium in pellentesque sit amet, maximus non diam. Sed eu lorem malesuada, placerat leo ac, placerat nisi. Maecenas id elit purus. Phasellus bibendum lectus maximus nibh facilisis vulputate. Aenean quis enim sed neque tempus maximus. Aliquam vitae malesuada est. Ut finibus dapibus tortor non bibendum. Aenean sit amet neque suscipit, blandit augue ut, sagittis ipsum. In hac habitasse platea dictumst. Fusce sed massa fermentum, condimentum massa non, ornare tellus. In risus eros, iaculis in ultrices vel, sollicitudin eu urna. Suspendisse commodo, lorem ac ullamcorper efficitur, augue magna lobortis ante, vel condimentum metus odio sit amet elit. In porttitor, enim pharetra finibus hendrerit, nulla odio luctus odio, eget porttitor est elit at massa. Integer ut volutpat arcu.</p>
    
    <p>&nbsp;</p>
    
    <p>Pellentesque sit amet placerat velit. Phasellus eleifend justo eget facilisis semper. Nullam malesuada lacus non aliquet iaculis. Integer vestibulum odio sit amet leo euismod, et lacinia leo convallis. Duis nec diam nec magna dictum tristique. Fusce feugiat rutrum elit, eu interdum quam eleifend nec. Phasellus dignissim lacinia congue. Fusce blandit consequat nunc quis faucibus. Nulla feugiat est malesuada ipsum mollis eleifend. Vivamus eget accumsan mi.</p>
    
    <p>Curabitur sollicitudin magna magna, a posuere metus convallis eget. Aenean commodo metus sed nisl tincidunt, vel interdum dolor dictum. Nam condimentum eu enim nec maximus. Phasellus et arcu vitae dolor vehicula gravida. Morbi tincidunt quam a dui viverra venenatis. Nunc quis mollis leo. Pellentesque blandit at augue a tempus. Donec risus leo, rutrum quis porttitor gravida, gravida id nisi. Sed vestibulum, leo sit amet lobortis dapibus, nisi metus porta elit, in dapibus est nisi ac elit. Nam vitae molestie ligula. Phasellus pharetra cursus nisi, in blandit justo efficitur sed. Phasellus fermentum sed quam a venenatis.</p>
    
    <p>&nbsp;</p>
    
    <p>Sed blandit tempor malesuada. Suspendisse dapibus neque libero. Sed egestas, mi ac ornare congue, mauris nisi tristique nunc, sed rutrum ante turpis ac metus. Ut ac hendrerit mauris, eu viverra nisi. Sed egestas, dolor sit amet vehicula condimentum, neque justo eleifend nulla, sed mollis lorem nibh vulputate ex. Vestibulum cursus sapien nibh, quis rhoncus ligula mollis eu. Sed condimentum imperdiet elit, a pulvinar erat consectetur vel. Nulla nec elit sodales tellus pellentesque fermentum vel a erat. Vestibulum varius, est non placerat ultrices, mauris turpis tempor neque, molestie luctus felis nulla in diam. Mauris euismod vestibulum sollicitudin. Nunc magna ex, bibendum et pharetra vel, laoreet vel sem. Mauris tempus urna justo, ut congue nisl pulvinar gravida.</p>
    `;
  }

  ngOnInit(): void {}


}

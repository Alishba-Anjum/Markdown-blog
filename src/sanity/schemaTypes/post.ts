export const  post = {
    name: 'blogPost',
    title: ' Blog Post',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Blog Heading',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
      },
      {
        title: 'Post date',
        name: 'postDate',
        type: 'date'
      },
    ]
}
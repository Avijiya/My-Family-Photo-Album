var images = ["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    
    document.getElementById("family_member_image").src = updatedImage;
    
}

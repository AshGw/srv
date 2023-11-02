mod processor;

use image::io::Reader as ImageReader;
use crate::processor::processor::overlay_images;

fn main() {
    let logo_path = "./logo.png";
    let logo_image = ImageReader::open(logo_path).expect("Failed to open logo image").decode().unwrap();

    let main_path = "./alien.jpg";
    let main_image = ImageReader::open(main_path).expect("Failed to open main image").decode().unwrap();

    let result_image = overlay_images(logo_image, main_image);

let output_path = "./alien_with_logo.jpg";
result_image.save(output_path).expect("Failed to save result image");

}

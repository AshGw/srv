use image::{DynamicImage, imageops};

pub fn overlay_images(logo_image: DynamicImage, main_image: DynamicImage) -> DynamicImage {
    let mut main_rgba = main_image.to_rgba8();

    let (main_width, main_height) = main_rgba.dimensions();

    let logo_width = 605; 
    let logo_height = 101; 

    let logo_position_x = main_width - logo_width;
    let logo_position_y = main_height - logo_height;

    let resized_logo = logo_image.resize_exact(logo_width, logo_height, imageops::FilterType::Nearest);

    let logo_rgba = resized_logo.to_rgba8();

    imageops::overlay(&mut main_rgba, &logo_rgba, logo_position_x, logo_position_y);

    DynamicImage::ImageRgba8(main_rgba)
}
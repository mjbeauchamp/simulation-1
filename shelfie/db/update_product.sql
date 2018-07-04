update products
set product_name = $1,
    product_price = $2,
    image_url = $3
where
    product_id = $4;
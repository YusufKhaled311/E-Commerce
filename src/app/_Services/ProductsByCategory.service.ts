export async function getProductsByCategory(id: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?category=${id}`,
      { cache: "no-store" }
    );

    const finalResult = await res.json();

    return finalResult.data;

  } catch (error) {
    console.log("Error products by category:", error);
    return [];
  }
}

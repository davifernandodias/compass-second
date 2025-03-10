




export const getAllProducts = async ({ initial, finalLimit }: { initial: number; finalLimit: number }) => {
  try {
    const response = await fetch(`http://localhost:8080/api/products?initial=${initial}&final=${finalLimit}`);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();

  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw new Error("Não foi possível buscar os produtos");
  }
};

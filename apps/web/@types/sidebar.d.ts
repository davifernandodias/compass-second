type FilterState = Omit<GetAllProductsProps, "initial" | "finalLimit">;

type FilterAction = { type: "SET_VALUE"; field: keyof FilterState; value: string | number };
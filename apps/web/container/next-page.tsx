import { Button } from "@repo/ui/button";
import { useFilterStore } from "@store/sidebar-filter";

interface NextPageProps {
  enableNextPage: boolean;
}

export default function NextPage({ enableNextPage }: NextPageProps) {
  const { setValue, currentPage, finalLimit } = useFilterStore();
  const PAGE_SIZE = 30;

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      const newFinalLimit = 75;
      const newInitialPage = 0;

      setValue("currentPage", currentPage - 1);
      setValue("initialPage", newInitialPage >= 0 ? newInitialPage : 0);
      setValue("finalLimit", newFinalLimit);
    } else {
      alert("Não é possível voltar");
    }
  console.log(enableNextPage)
  console.log(currentPage)

  };

  const handleNextPage = () => {
    if (enableNextPage) {
      setValue("currentPage", currentPage + 1);
      setValue("initialPage", finalLimit);
      setValue("finalLimit", finalLimit + PAGE_SIZE);
    } else {
      alert("Não há mais produtos");
    }
  };

  return (
    <div className="flex gap-6 bg-red-200">
      <Button onclick={handlePreviousPage} className="hover:bg-green-200 cursor-pointer">
        Previous
      </Button>
      <div>{currentPage}</div>
      <Button onclick={handleNextPage} className="hover:bg-green-200 cursor-pointer">
        Next
      </Button>
    </div>
  );
}
interface FiltersProps {
    searchInput: string;
    occasionFilters: string[];
    typeFilters: string[];
    allOccasions: string[];
    allTypes: string[];
    handleOccasionChange: React.ChangeEventHandler<HTMLInputElement>;
    handleTypeChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit: (e: React.FormEvent) => void;
    clearFilters: () => void;
}

export default FiltersProps;
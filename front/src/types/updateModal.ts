import { User } from "./auth";
import { Recipe } from "./recipe";

export interface UpdateUserModalProps {
    show: boolean;
    onHide: () => void;
    onSave: (data: any) => void;
    title: string;
    fields: User | null;
}

export interface UpdateRecipeModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    fields: Recipe | null;
}
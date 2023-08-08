'use client'

import { Category } from "@prisma/client";
import {useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/lib/utils";
import qs from "query-string";

interface CategoriesProps {
    categories: Category[]
}
const Categories = ({categories}:CategoriesProps) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const categoryId = searchParams.get('categoryId')

    const onClick = (id: string | undefined) => {
        const query = { categoryId: id }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {
            skipNull: true,
        })

        router.push(url)
    }

    return (
        <div className={`flex w-full overflow-x-auto space-x-2 p-1`}>
            <button onClick={() => onClick(undefined)}
                    className={cn(
                        `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition`,
                        !categoryId && `bg-primary/25`
                        )}>
                Newest
            </button>
            {categories.map((category) => (
                <button key={category.id}
                        onClick={() => onClick(category.id)}
                        className={cn(
                            `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition`,
                            categoryId === category.id && `bg-primary/25`
                        )}>
                    {category.name}
                </button>
            ))}
        </div>
    )
}

export default Categories
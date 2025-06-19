// services/universityService.ts
export interface University {
    name: string;
    web_pages: string[];
    country: string;
}

export async function fetchUniversities(country: string): Promise<University[]> {
    const res = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    if (!res.ok) {
        throw new Error('Failed to fetch universities');
    }
    return await res.json();
}

export type Developer = { id: number, name: string }
export type DeveloperList = Developer[]

export async function listDevelopers(): Promise<DeveloperList> {
    console.log('listDevelopers start')
    // import.meta.env.VITE_API_URL

    const names = [
        'Vicki Tyler',
        'Lydia Salas',
        'Marion House',
        'Anita Riggs',
        'Sammy Stanton',
        'Numbers Lamb',
        'Dustin Beard',
        'Barbra Ewing',
        'Raphael Quinn',
        'Everette Hutchinson',
        'Hershel Bush',
        'Rita Skinner',
        'Junior Vasquez',
        'Heather Livingston',
        'Annmarie Ellis',
        'Madeline Wong',
        'Dewitt Spence',
        'Katherine Gilmore',
        'Marcella Camacho',
        'Austin Medina',
        'Lina Eaton',
        'Buford Lester',
        'Bradley Zamora',
        'Lee Smith',
        'Juan Walters',
        'Brett Freeman',
        'Marlon Maldonado',
        'Joe Brandt',
        'Houston Suarez',
        'George Mullins',
        'Samantha Fritz',
        'Kenny Madden',
        'Mary Buchanan',
        'Vincent Melendez',
        'Dwain Rollins',
        'Haywood Bates',
        'Pierre Werner',
        'Antony Hardy',
        'Parker Friedman',
        'Lewis Palmer',
        'Leon Rosario',
        'Cleveland Richard',
        'Mitch Lowery',
        'Vicky Walter',
        'Juliette Wilson',
        'Winford Mcgee',
        'Anne Marks',
        'Johnny Hartman',
        'Damion Schneider',
        'Roseann Fox'
    ];

    const result: DeveloperList = names.map((name, index) => {
        return ({id: index+1, name})
    })

    console.log('listDevelopers end')
    return result
}

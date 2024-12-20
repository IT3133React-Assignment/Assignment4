function AnimalTable(props) {
    return (
        <div className='gameContainer'>
            <table className='table'>
                <thead>
                    <tr>
                        <th colspan="3">
                            <h2>ANIMAL MATCHING GAME</h2>
                        </th>
                    </tr>
                    <tr>
                        <th><h3>Result</h3></th>
                        <th><h3>Animal Name</h3></th>
                        <th><h3>Select the Animal</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='result-col' width="10%">
                            <h2>{result}</h2>
                        </td>

                        <td className='animalname-col' width="20%">
                            <h2>{randomAnimal.name.toUpperCase()}</h2>
                        </td>
                        <td classname='animalgrid-col' width="70%">
                            <div>
                                <div className='animalgrid'>
                                    {animals.map((animal) => (
                                        <div key={animal.name} className='animalgrid-item' onClick={() => handleAnimalClick(animal.name)}>
                                            <img src={require(`../assets/img/${animal.img}`)} alt={animal.name} className='animal-image' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AnimalTable
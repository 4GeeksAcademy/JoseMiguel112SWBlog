//https://www.swapi.tech/api/starships/?expanded=true

export async function getPeople() {
	try {
		let response = await fetch('https://www.swapi.tech/api/people/?expanded=true',{
			method: 'GET'
		})
		let data = await response.json()

        if (response.status === 200) {
            return data.results
        }
		
		
		
	 } catch (error) {
		console.log(error);
		
	 }
	
   }

   export async function getPlanets() {
	try {
		let response = await fetch('https://www.swapi.tech/api/planets/?expanded=true',{
			method: 'GET'
		})
		let data = await response.json()

        if (response.status === 200) {
            return data.results
        }
		
		
		
	 } catch (error) {
		console.log(error);
		
	 }
	
   }


   export async function getVehicles(){
	try {
		let response = await fetch('https://www.swapi.tech/api/vehicles/?expanded=true',{
			method: 'GET'
		})
		let data = await response.json()

        if (response.status === 200) {
            return data.results
        }
		
		
		
	 } catch (error) {
		console.log(error);
		
	}
   }

   export async function getCharacter(id) {
	try {
		let response = await fetch('https://www.swapi.tech/api/people/'+{id},{
			method: 'GET'
		})
		let data = await response.json()

        if (response.status === 200) {
            return data.results
        }
		
		
		
	 } catch (error) {
		console.log(error);
		
	 }
	
   }


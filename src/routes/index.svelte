<script>
	let finalProjectGrade = 8.1

	$: grades = [
		{
			year: 2,
			ec: 5,
			name: 'Project: Web',
			grade: 6.4
		},
		{
			year: 2,
			ec: 3,
			name: 'DFI: Design Patterns',
			grade: 7
		},
		{
			year: 2,
			ec: 3,
			name: 'Frontend Development',
			grade: 8.5
		},
		{
			year: 2,
			ec: 3,
			name: 'Vormgeving 2',
			grade: 8
		},
		{
			year: 2,
			ec: 5,
			name: 'Project: Beyond',
			grade: 6.4
		},
		{
			year: 2,
			ec: 3,
			name: 'Content Delivery',
			grade: 7
		},
		{
			year: 2,
			ec: 3,
			name: 'Ontwerponderzoek',
			grade: 7.6
		},
		{
			year: 2,
			ec: 3,
			name: 'Ubicomp',
			grade: 7
		},
		{
			year: 2,
			ec: 1,
			name: 'Studieregie 2.1',
			grade: 7
		},
		{
			year: 2,
			ec: 1,
			name: 'Studieregie 2.2',
			grade: 7
		},
		{
			year: 2,
			ec: 1,
			name: 'Jaar 2 Eindassessment',
			grade: 7.5
		},
		{
			year: 2,
			ec: 5,
			name: 'Korte stage',
			grade: 9
		},
		{
			year: 2,
			ec: 5,
			name: 'Project: Tech',
			grade: 6.9
		},
		{
			year: 2,
			ec: 3,
			name: 'Backend Development',
			grade: 8.3
		},
		{
			year: 2,
			ec: 3,
			name: 'Frontend Development 2',
			grade: 8.1
		},
		{
			year: 2,
			ec: 3,
			name: 'Audio Design',
			grade: 8.5
		},
		{
			year: 3,
			ec: 3,
			name: 'Dataweek',
			grade: 9
		},
		{
			year: 3,
			ec: 3,
			name: 'Datavisualisatie 1',
			grade: 5.5
		},
		{
			year: 3,
			ec: 6,
			name: 'Datavisualisatie 2',
			grade: 7
		},
		{
			year: 3,
			ec: 3,
			name: 'Frontend Applications',
			grade: 8.3
		},
		{
			year: 3,
			ec: 3,
			name: 'Frontend Data',
			grade: 7
		},
		{
			year: 3,
			ec: 3,
			name: 'Functional Programming',
			grade: 7.6
		},
		{
			year: 3,
			ec: 9,
			name: 'Project: Information Design',
			grade: 8.5
		},
		{
			year: 3,
			ec: 3,
			name: 'Minor: StartUp fase',
			grade: 7
		},
		{
			year: 3,
			ec: 7,
			name: 'Minor: Ondernemende Prestaties',
			grade: 7.1
		},
		{
			year: 3,
			ec: 18,
			name: 'Minor: Eigen bedrijf i.d. markt zetten',
			grade: 8.5
		},
		{
			year: 3,
			ec: 2,
			name: 'Minor: Eindportfolio',
			grade: 9
		},
		{
			year: 4,
			ec: 30,
			name: 'Lange stage',
			grade: 9
		},
		{
			year: 4,
			ec: 30,
			name: 'Afstudeerproject',
			grade: finalProjectGrade
		}
	]

	$: gradesTimesEc = grades.map((grade) => {
		return [...Array(grade.ec)].map(() => grade.grade)
	})

	$: clean = gradesTimesEc.flat()
	$: average = clean.reduce((acc, curr) => acc + curr, 0) / clean.length
</script>

<header class="fixed inset-8 right-auto">
	<details class="open:bg-white rounded-2xl max-h-full overflow-y-auto">
		<summary
			class="mb-8 sticky left-0 top-0 bg-gradient-to-b from-white via-white to-transparent p-8 w-full cursor-pointer"
			>Grades</summary
		>
		<ul class="p-8 pt-0">
			{#each grades as { ec, name, grade, year }, index}
				{@const isNewYear = index > 0 && grades[index - 1].year < year}
				<li class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
					{#if isNewYear || index === 0}
						<span class="col-span-full text-stone-600" class:mt-8={isNewYear}>Jaar {year}</span>
					{/if}
					<h5 class="name">{name}</h5>
					<span class="font-medium">{grade}</span>
					<small class="italic">({ec} EC)</small>
				</li>
			{/each}
		</ul>
	</details>
</header>

<main>
	<h1 class="max-w-lg text-center">
		If I get an

		<input
			type="number"
			class="rounded-full w-24 [font:inherit]"
			bind:value={finalProjectGrade}
			step="0.1"
			data-pattern="A input regex pattern that accepts anything from 1.0 to 10.0"
			min={1}
			max={10}
			required
		/>
		for my Graduation Project,
		{#if average < 5.5 || finalProjectGrade < 5.5}
			I will not graduate at all 😜
		{:else}
			I will graduate {average > 8 ? 'Cum Laude 🎉' : 'normally'}
		{/if}
	</h1>
	<small class="w-full text-center mx-auto block text-stone-600 mt-4"
		>(Grade average: {average.toFixed(2)})</small
	>
</main>

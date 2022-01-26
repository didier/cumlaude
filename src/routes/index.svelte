<script>
	let graduationProjectGrade = 8

	$: grades = [
		{
			ec: 3,
			name: 'Dfi: Design Patterns',
			grade: 7
		},
		{
			ec: 3,
			name: 'Frontend Development',
			grade: 8.5
		},
		{
			ec: 5,
			name: 'Project: Web',
			grade: 6.4
		},
		{
			ec: 3,
			name: 'Vormgeving 2',
			grade: 8
		},
		{
			ec: 3,
			name: 'Content Delivery',
			grade: 7
		},
		{
			ec: 3,
			name: 'Ontwerponderzoek',
			grade: 7.6
		},
		{
			ec: 5,
			name: 'Project: Beyond',
			grade: 6.4
		},
		{
			ec: 3,
			name: 'Ubicomp',
			grade: 7
		},
		{
			ec: 1,
			name: 'Studieregie 2.1.',
			grade: 7
		},
		{
			ec: 1,
			name: 'Studieregie 2.2.',
			grade: 7
		},
		{
			ec: 1,
			name: 'V1 Assessment',
			grade: 7.5
		},
		{
			ec: 5,
			name: 'Korte stage',
			grade: 9
		},
		{
			ec: 3,
			name: 'Backend Development',
			grade: 8.3
		},
		{
			ec: 3,
			name: 'Frontend Development 2',
			grade: 8.1
		},
		{
			ec: 5,
			name: 'Project: Tech',
			grade: 6.9
		},
		{
			ec: 0,
			name: 'Audio Visueel Design pd',
			grade: ''
		},
		{
			ec: 3,
			name: 'AudioDesign',
			grade: 8.5
		},
		{
			ec: 3,
			name: 'Data week tm',
			grade: 9
		},
		{
			ec: 3,
			name: 'Datavisualisatie 1 tm',
			grade: 5.5
		},
		{
			ec: 6,
			name: 'Datavisualisatie 2 tm',
			grade: 7
		},
		{
			ec: 9,
			name: 'Tech Track 8',
			grade: ''
		},
		{
			ec: 3,
			name: 'Frontend Applications',
			grade: 8.3
		},
		{
			ec: 3,
			name: 'Frontend Data',
			grade: 7
		},
		{
			ec: 3,
			name: 'Functional Programming',
			grade: 7.6
		},
		{
			ec: 9,
			name: 'Pr. Information Design',
			grade: 8.5
		},
		{
			ec: 3,
			name: 'StartUp fase',
			grade: 7
		},
		{
			ec: 7,
			name: 'Opdrachten (in portfolio)',
			grade: 7.1
		},
		{
			ec: 18,
			name: 'Eigen bedrijf markt zetten',
			grade: 8.5
		},
		{
			ec: 2,
			name: 'Eindportfolio',
			grade: 9
		},
		{
			ec: 30,
			name: 'Lange stage',
			grade: 9
		},
		{
			ec: 30,
			name: 'Afstudeerproject',
			grade: graduationProjectGrade
		}
	]

	$: gradesTimesEc = grades.map((grade) => {
		return [...new Array(grade.ec)].map(() => grade.grade)
	})

	$: clean = gradesTimesEc.flat().filter((entry) => typeof entry !== 'string')
	$: averageOfClean = clean.reduce((acc, curr) => acc + curr, 0) / clean.length
</script>

<header class="fixed inset-8 right-auto">
	<details class="open:bg-white p-8 rounded-2xl max-h-screen overflow-y-auto">
		<summary class="mb-8">Grades</summary>
		<ul>
			{#each grades as { ec, name, grade }}
				<li class="grid grid-cols-[1fr_auto_auto] items-center gap-4">
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
			bind:value={graduationProjectGrade}
			step="0.1"
		/>
		for my Graduation Project, I will graduate {averageOfClean > 8 ? 'Cum Laude 🎉' : 'normally'}
	</h1>
</main>

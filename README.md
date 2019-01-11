# **parse_pdb package**
## Provides a server-side interface for indentifying MHC structures in the PDB by peptide characteristics... or will, anyway.

Still a lot of work to do...
* Enumerate class I human/mouse MHC heavy chain uniprot IDs (data.csv)
	* Fill in A/B chain for human/mouse class II
	* Add other organism MHC/B2M combos	
* Get project actually functional?
	* File responsible for adaptive options for form entry (queryform.js) is non-functional.
		* Could be because it's stored and running locally (vs. server)?
		* Could be bc the JS is shit.
			* Comment this code!!
	* How best to store the table data in data.csv?
		* NO IDEA what PHP likes to read?
		* JSON might be good for JS
	* Haven't even started testing ways to post/get requests from rcsb. A few options possibly include:
		* Using PHP curl (see rcsb.php)
		* Using JS (much easier than _yikes_ learning PHP -- does JS have a curl function?)
		* Saying fuck it all and getting a django server.
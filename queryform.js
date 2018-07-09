$(document).ready(function() {
	// var genes = $.getJSON("data.json").genes
	// var alleles = $.getJSON("data.json").alleles
	// var uniprotIDs = $.getJSON("data.json").uniprot
	var data = JSON.parse(asdf);
	console.log(data)
	var genes = data.genes;
	var alleles = data.alleles;
	var uniprotIDs = data.uniprot;
	console.log("Genes: "+genes)
	console.log("Alleles: "+alleles)
	console.log("Uniprot IDs: "+uniprot)
	$('#organism').prop('autofocus', true);
	$("#organism").change(function() {
		org = $(this).val();
		$('#organism').prop('autofocus', false);
		$('#class').prop('disabled', false);
		$('#class').prop('autofocus', true);
		try {
			var key = org+$("#class").val();
			var vals = eval('genes.'+key+'.split(",");');
			var $gene = $("#gene");
			$gene.empty();
			$.each(vals, function(index, value) {
			$gene.append('<option value="' + value +'">' + value + '</option>');
			});
		}
		catch(err) {
			console.log('Error: '+err);
		}
	});
	$("#class").change(function() {
		$('#class').prop('autofocus', false);
		$('#allele').prop('autofocus', true);
		try {
			var key = org+$(this).val();
			var vals = eval('genes.'+key+'.split(",");');
			var $gene = $("#gene");
			$gene.empty();
			$gene.append('<option value="" disabled selected>Select Gene</option>');
			$.each(vals, function(index, value) {
			$gene.append('<option value="' + value +'">' + value + '</option>');
			});
		}
		catch(err) {
			console.log('Error: '+err);
		}
	});
	$("#allele").change(function() {
		$('#allele').prop('autofocus', false);
		try {
			var key = org+$(this).val();
			var vals = eval('alleles.'+key+'.split(",");');
			var $gene = $("#gene");
			$gene.empty();
			$gene.append('<option value="" disabled selected>Select Gene</option>');
			$.each(vals, function(index, value) {
			$gene.append('<option value="' + value +'">' + value + '</option>');
			});
		}
		catch(err) {
			console.log('Error: '+err);
		}
	});
	/*
	// empty options
	$("#class").change(function() {
			hier2 = org+$(this).val()
			// load gene options
	});
	*/
	
	
	
	
	
});
/*


$("#first-choice").change(function() {

	var $dropdown = $(this);

	$.getJSON("jsondata/data.json", function(data) {
	
		var key = $dropdown.val();
		var vals = [];
							
		switch(key) {
			case 'beverages':
				vals = data.beverages.split(",");
				break;
			case 'snacks':
				vals = data.snacks.split(",");
				break;
			case 'base':
				vals = ['Please choose from above'];
		}
		
		var $secondChoice = $("#second-choice");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

	});
});
*/

var asdf=''

/*


  "H-2K": "H-2Kb,H-2Kd,H-2Kk,",
  "H-2D": "H-2Db,H-2Dd,H-2Dk,",
  "H-2L": "H-2Ld",
  "H-2A": "H-2Aa",
  "I-A": "I-Ab,I-Ad,I-Ak,I-As",
  "I-E": "I-Ed,I-Ek",
  
}
*/